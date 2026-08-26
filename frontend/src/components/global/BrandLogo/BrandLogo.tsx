import { brand } from '@src/config/mantis'

interface BrandLogoProps {
  variant?: 'nav' | 'footer'
}

function BrandLogo({ variant = 'nav' }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo--${variant}`}>
      <img
        src={brand.logos.horizontalWhite}
        alt={brand.name}
        className="brand-logo__horizontal"
        width={358}
        height={120}
        decoding="async"
      />
      <img
        src={brand.logos.markWhite}
        alt=""
        aria-hidden="true"
        className="brand-logo__mark"
        width={120}
        height={120}
        decoding="async"
      />
    </span>
  )
}

export default BrandLogo
