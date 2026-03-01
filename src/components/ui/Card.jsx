/**
 * variants: 'default' | 'active' | 'simple'
 * - default: white bg, border, icon centered
 * - active:  gold bg, white text, icon centered
 * - simple:  white bg, border, no icon, left-aligned (Why Us style)
 */
export default function Card({ title, description, icon, variant = 'default', className = '' }) {
  const isActive = variant === 'active';
  const isSimple = variant === 'simple';
  const base = `rounded-lg p-6 flex flex-col gap-3 transition-colors duration-200 ${isSimple ? 'items-start text-left' : 'items-center text-center'}`;
  const styles = {
    default: 'bg-white border border-border-default/60 hover:border-brand-primary/40',
    active:  'bg-brand-primary border border-brand-primary',
    simple:  'bg-white border border-border-default/60 hover:border-brand-primary/40',
  };
  return (
    <div className={`${base} ${styles[variant]} ${className}`}>
      {icon && !isSimple && (
        <div className={`mb-1 ${isActive ? 'text-white' : 'text-text-secondary'}`}>{icon}</div>
      )}
      <h3
        className={`text-base font-semibold leading-snug ${isActive ? 'text-white' : 'text-text-primary'}`}
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </h3>
      {description && (
        <p className={`text-sm leading-relaxed ${isActive ? 'text-white/80' : 'text-text-secondary'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function ShipIcon({ color = 'currentColor', size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 21l1-8h18l1 8H2z" />
      <path d="M6 13V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <path d="M12 3v4" /><path d="M9 7h6" />
    </svg>
  );
}