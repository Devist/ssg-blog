import classNames from 'classnames'

interface Props {
  children?: React.ReactNode
  className?: string
  outline: boolean
}

function Card({ children, className, outline }: Props) {
  const classes = classNames(
    className,
    'card',
    'px-6 py-1',
    'rounded-xl',
    'overflow-hidden',
    'shadow-lg',
    'border-dark',
    outline ? 'border-1' : 'border-0'
  )

  return <div className={classes}>{children}</div>
}

Card.defaultProps = {
  outline: true
}

export default Card
