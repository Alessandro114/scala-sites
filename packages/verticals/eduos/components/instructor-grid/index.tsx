'use client'

interface Instructor {
  id: string
  name: string
  photo?: string
  subjects: string[]
  bio: string
  qualifications: string[]
  yearsTeaching: number
  studentCount: number
  rating: number
  catalogLink?: string
}

interface InstructorGridProps {
  instructors: Instructor[]
  onViewCourses?: (instructorId: string) => void
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor"
          style={{ color: i <= Math.round(rating) ? '#f59e0b' : '#d1d5db' }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm font-semibold ml-1">{rating.toFixed(1)}</span>
    </div>
  )
}

export function InstructorGrid({ instructors, onViewCourses }: InstructorGridProps) {
  return (
    <section className="py-16 px-4" style={{ background: 'var(--color-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Meet Our Instructors</h2>
        <p className="text-center mb-10" style={{ color: 'var(--color-text-muted)' }}>Passionate experts who bring their subjects to life</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {instructors.map(inst => (
            <div key={inst.id} className="rounded-2xl border overflow-hidden flex flex-col sm:flex-row"
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}>
              {/* Photo */}
              <div className="w-full sm:w-40 h-48 sm:h-auto flex-shrink-0" style={{ background: 'var(--color-secondary)' }}>
                {inst.photo ? (
                  <img src={inst.photo} alt={inst.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold"
                    style={{ color: 'var(--color-primary)' }}>
                    {inst.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{inst.name}</h3>
                  <StarRating rating={inst.rating} />
                </div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-1.5">
                  {inst.subjects.map(s => (
                    <span key={s} className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                      style={{ background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)', color: 'var(--color-accent)' }}>
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-sm line-clamp-3" style={{ color: 'var(--color-text-muted)' }}>{inst.bio}</p>

                {/* Qualifications */}
                <div className="flex flex-wrap gap-1.5">
                  {inst.qualifications.map(q => (
                    <span key={q} className="px-2 py-0.5 text-xs rounded border"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>{q}</span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-5 text-sm pt-1">
                  <div>
                    <p className="font-bold" style={{ color: 'var(--color-primary)' }}>{inst.yearsTeaching}+</p>
                    <p style={{ color: 'var(--color-text-muted)' }}>yrs teaching</p>
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: 'var(--color-primary)' }}>
                      {inst.studentCount >= 1000 ? `${(inst.studentCount / 1000).toFixed(1)}k` : inst.studentCount}
                    </p>
                    <p style={{ color: 'var(--color-text-muted)' }}>students</p>
                  </div>
                </div>

                <a href={inst.catalogLink || '#courses'}
                  onClick={e => { if (onViewCourses) { e.preventDefault(); onViewCourses(inst.id) } }}
                  className="mt-auto inline-block text-center py-2.5 px-5 rounded-xl text-sm font-semibold transition-colors text-white"
                  style={{ background: 'var(--color-primary)' }}>
                  View Courses
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
