import { Globe, Mail, MapPin, Sparkles, ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/data'

const iconMap = {
  Globe,
  Mail,
  MapPin,
  Sparkles,
} as const

type IconName = keyof typeof iconMap

function ProjectCard({ project }: { project: Project }) {
  const isComingSoon = project.status === 'coming-soon'
  const Icon = iconMap[project.iconName as IconName] ?? Globe

  return (
    <article
      className={`project-card${isComingSoon ? ' project-card--coming-soon' : ''}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: isComingSoon ? '#f0eeeb' : '#ffffff',
        borderRadius: '12px',
        padding: '32px',
        opacity: isComingSoon ? 0.85 : 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Accent top line */}
      {!isComingSoon && (
        <div
          className="accent-line"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: '#17b5f2',
          }}
          aria-hidden="true"
        />
      )}

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: isComingSoon ? '#d4cfc8' : '#e8f8fe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon
            size={22}
            style={{ color: isComingSoon ? '#3d3839' : '#17b5f2' }}
            aria-hidden="true"
          />
        </div>

        {isComingSoon ? (
          <span
            style={{
              background: '#fef9e7',
              color: '#ebad06',
              border: '1px solid #ebad06',
              borderRadius: '9999px',
              padding: '4px 10px',
              fontSize: '0.6875rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display-var, sans-serif)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Připravujeme
          </span>
        ) : (
          project.url && (
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="project-arrow"
            />
          )
        )}
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-display-var, sans-serif)',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: '#252021',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body-var, sans-serif)',
            fontSize: '0.9375rem',
            color: '#3d3839',
            margin: 0,
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          {project.description}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body-var, sans-serif)',
            fontSize: '0.875rem',
            color: '#3d3839',
            margin: 0,
            lineHeight: 1.6,
            opacity: 0.75,
          }}
        >
          {project.detail}
        </p>
      </div>

      {/* CTA */}
      {project.url && !isComingSoon && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-cta"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-display-var, sans-serif)',
            fontWeight: 600,
            fontSize: '0.875rem',
            color: '#17b5f2',
            textDecoration: 'none',
            marginTop: '4px',
          }}
        >
          Navštívit web
          <ArrowUpRight size={14} />
        </a>
      )}

      {/* Overlay link for whole card */}
      {project.url && !isComingSoon && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: 'absolute', inset: 0 }}
          aria-label={`${project.name} — ${project.description} (otevře novou záložku)`}
          tabIndex={-1}
          aria-hidden="true"
        />
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projekty"
      aria-labelledby="projekty-heading"
      style={{
        background: '#f0eeeb',
        padding: 'clamp(3rem, 8vw, 5rem) 0',
      }}
    >
      <style>{`
        .project-card {
          border: 1px solid #d4cfc8;
          box-shadow: 0 1px 3px rgba(37,32,33,0.08);
          transition: border-color 250ms cubic-bezier(0.4,0,0.2,1),
                      transform 250ms cubic-bezier(0.4,0,0.2,1),
                      box-shadow 250ms cubic-bezier(0.4,0,0.2,1);
        }
        .project-card--coming-soon {
          border: 2px dashed #d4cfc8;
          box-shadow: none;
        }
        .project-card:not(.project-card--coming-soon):hover {
          border-color: #17b5f2;
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(23,181,242,0.12);
        }
        .accent-line {
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 250ms cubic-bezier(0.4,0,0.2,1);
        }
        .project-card:not(.project-card--coming-soon):hover .accent-line {
          transform: scaleX(1);
        }
        .project-arrow {
          color: #d4cfc8;
          transition: color 200ms ease;
          flex-shrink: 0;
        }
        .project-card:not(.project-card--coming-soon):hover .project-arrow {
          color: #17b5f2;
        }
        .project-cta {
          transition: gap 150ms ease;
        }
        .project-cta:hover {
          gap: 10px;
        }
      `}</style>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)', boxSizing: 'border-box' as const }}>
        {/* Section header */}
        <div style={{ marginBottom: '3rem', maxWidth: '560px' }}>
          <p
            style={{
              fontFamily: 'var(--font-display-var, sans-serif)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#17b5f2',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Co děláme
          </p>
          <h2
            id="projekty-heading"
            style={{
              fontFamily: 'var(--font-display-var, sans-serif)',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#252021',
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            Naše projekty
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body-var, sans-serif)',
              fontSize: '1rem',
              color: '#3d3839',
              marginTop: '12px',
              marginBottom: 0,
              lineHeight: 1.6,
            }}
          >
            Každý projekt skupiny NG Consulting se zaměřuje na konkrétní oblast vašeho online podnikání.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
