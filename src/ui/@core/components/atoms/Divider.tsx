import classNames from 'classnames'

interface IProps {
  className?: string
}

function Divider({ className }: IProps) {
  const classes = classNames('py-4', className)
  return (
    <div className={classes}>
      <div className="h-px bg-gray-300" />
    </div>
  )
}

export default Divider
