'use client'

import { useState, useMemo } from 'react'

interface FinanceCalculatorProps {
  vehiclePrice?: number
  currency?: string
  locale?: string
  defaultApr?: number
  onApply?: (details: FinanceDetails) => void
}

export interface FinanceDetails {
  vehiclePrice: number
  deposit: number
  term: number
  apr: number
  monthlyPayment: number
  totalRepayable: number
  totalInterest: number
}

const TERM_OPTIONS = [12, 24, 36, 48, 60] as const

// Standard HP (Hire Purchase) monthly payment formula
function calcMonthlyPayment(principal: number, annualRate: number, months: number): number {
  if (annualRate === 0) return principal / months
  const r = annualRate / 100 / 12
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

export function FinanceCalculator({
  vehiclePrice: initialPrice,
  currency = 'GBP',
  locale = 'en-GB',
  defaultApr = 9.9,
  onApply,
}: FinanceCalculatorProps) {
  const [priceInput, setPriceInput] = useState(initialPrice ?? 25000)
  const [depositPct, setDepositPct] = useState(10)
  const [term, setTerm] = useState<number>(48)
  const apr = defaultApr

  const fmt = (n: number) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(n)

  const fmtDec = (n: number) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)

  const details = useMemo<FinanceDetails>(() => {
    const deposit = Math.round((priceInput * depositPct) / 100)
    const principal = priceInput - deposit
    const monthly = calcMonthlyPayment(principal, apr, term)
    const totalRepayable = deposit + monthly * term
    const totalInterest = totalRepayable - priceInput
    return { vehiclePrice: priceInput, deposit, term, apr, monthlyPayment: monthly, totalRepayable, totalInterest }
  }, [priceInput, depositPct, term, apr])

  const depositAmount = Math.round((priceInput * depositPct) / 100)

  return (
    <section style={{ padding: '64px 16px', background: 'var(--color-secondary)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
          Finance Calculator
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--color-text-muted)' }}>
          Get an instant estimate — subject to status and credit check
        </p>

        <div style={{
          background: 'var(--color-bg, #ffffff)',
          borderRadius: '20px',
          border: '1px solid var(--color-border)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}>
          {/* Left: inputs */}
          <div style={{ padding: '36px', borderRight: '1px solid var(--color-border)' }}>
            {/* Vehicle Price */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '0.875rem' }}>
                Vehicle Price
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{
                  position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
                  fontWeight: 700, color: 'var(--color-text-muted)',
                }}>
                  {currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : '$'}
                </span>
                <input
                  type="number"
                  value={priceInput}
                  min={1000}
                  max={500000}
                  step={500}
                  onChange={e => setPriceInput(Math.max(1000, Number(e.target.value)))}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 32px',
                    borderRadius: '10px',
                    border: '2px solid var(--color-border)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    background: 'var(--color-secondary)',
                    color: 'var(--color-text)',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Deposit slider */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
                <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Deposit</label>
                <span style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-primary)' }}>
                  {fmt(depositAmount)} ({depositPct}%)
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={50}
                step={5}
                value={depositPct}
                onChange={e => setDepositPct(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Term selector */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '10px', fontSize: '0.875rem' }}>
                Loan Term
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {TERM_OPTIONS.map(t => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '2px solid',
                      borderColor: term === t ? 'var(--color-primary)' : 'var(--color-border)',
                      background: term === t ? 'var(--color-primary)' : 'transparent',
                      color: term === t ? '#ffffff' : 'var(--color-text)',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {t} mo
                  </button>
                ))}
              </div>
            </div>

            {/* APR display */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderRadius: '10px',
              background: 'var(--color-secondary)',
              border: '1px solid var(--color-border)',
            }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Representative APR</span>
              <span style={{ fontWeight: 700, fontSize: '1rem' }}>{apr}%</span>
            </div>
          </div>

          {/* Right: result */}
          <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Monthly payment hero */}
              <div style={{
                textAlign: 'center',
                padding: '28px 20px',
                borderRadius: '16px',
                background: 'var(--color-primary)',
                marginBottom: '24px',
              }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginBottom: '8px' }}>
                  Estimated Monthly Payment
                </p>
                <p style={{ color: '#ffffff', fontSize: '3rem', fontWeight: 800, lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                  {fmtDec(details.monthlyPayment)}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginTop: '8px' }}>
                  per month for {term} months
                </p>
              </div>

              {/* Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  { label: 'Vehicle Price', value: fmt(details.vehiclePrice) },
                  { label: 'Deposit', value: fmt(details.deposit) },
                  { label: 'Amount Financed', value: fmt(details.vehiclePrice - details.deposit) },
                  { label: 'Total Interest', value: fmt(details.totalInterest) },
                  { label: 'Total Repayable', value: fmt(details.totalRepayable), bold: true },
                ].map(row => (
                  <div key={row.label} style={{
                    display: 'flex', justifyContent: 'space-between',
                    paddingBottom: '10px',
                    borderBottom: '1px solid var(--color-border)',
                    fontWeight: row.bold ? 700 : 400,
                    fontSize: row.bold ? '1rem' : '0.875rem',
                  }}>
                    <span style={{ color: row.bold ? 'var(--color-text)' : 'var(--color-text-muted)' }}>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply CTA */}
            <button
              onClick={() => onApply?.(details)}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                background: 'var(--color-accent)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Apply for Finance
            </button>

            {/* Disclaimer */}
            <p style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', marginTop: '16px', lineHeight: 1.5, textAlign: 'center' }}>
              Representative example: {fmt(details.vehiclePrice - details.deposit)} borrowed over {term} months at {apr}% APR.
              Monthly repayment {fmtDec(details.monthlyPayment)}. Total amount repayable {fmt(details.totalRepayable)}.
              Subject to status. Finance provided by authorised lenders. 18+ only.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
