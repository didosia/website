import { Link } from 'react-router-dom';

/**
 * variants: 'solid' | 'outline' | 'outline-gold' | 'arrow'
 * sizes:    'sm' | 'md' | 'lg'
 */
export default function Button({
  children, to, href, onClick,
  variant = 'solid', size = 'md',
  className = '', type = 'button',
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 cursor-pointer';
  const sizes = { sm: 'px-5 py-2 text-xs', md: 'px-7 py-3 text-sm', lg: 'px-10 py-4 text-sm' };
  const variants = {
    solid:        'bg-brand-primary text-text-primary border border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary',
    outline:      'bg-transparent text-text-primary border border-text-primary hover:bg-text-primary hover:text-white',
    'outline-gold': 'bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-text-primary',
    arrow:        'bg-brand-primary text-text-primary border border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary',
  };
  const classes = `${base} ${sizes[size]} ${variants[variant] || variants.solid} ${className}`;
  const style = { fontFamily: 'Playfair Display, serif' };
  const inner = (
    <>
      {children}
      {variant === 'arrow' && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </>
  );
  if (to) return <Link to={to} className={classes} style={style}>{inner}</Link>;
  if (href) return <a href={href} className={classes} style={style} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <button type={type} onClick={onClick} className={classes} style={style}>{inner}</button>;
}