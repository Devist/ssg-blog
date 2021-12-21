import classNames from 'classnames'

interface Props {
  children?: React.ReactNode
  className?: string
  shadow?: boolean
  outline: boolean
}

function Card({ children, className, outline, shadow }: Props) {
  const classes = classNames(
    'card',
    'p-1',
    'rounded-xl',
    'overflow-hidden',
    shadow ? 'shadow-lg' : null,
    'border-dark',
    outline ? 'border-1' : 'border-0',
    className
  )

  return <div className={classes}>{children}</div>
}

Card.defaultProps = {
  outline: true,
  shadow: true
}

export default Card
