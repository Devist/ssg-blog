import classNames from 'classnames'
import Avatar from '../../atoms/Avatar'
import Card from '../../molecules/card/Card'

interface IProps {
  name: string
  subName: string
  size: number
  outline?: boolean
  shadow?: boolean
  className?: string
}

function Profile({ name, subName, size, className, shadow, outline }: IProps) {
  const classes = classNames(className, 'flex', 'items-center')
  return (
    <Card shadow={shadow} outline={outline} className={classes}>
      <div className="mr-3">
        <Avatar size={size} />
      </div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-xs text-gray-500">{subName}</p>
      </div>
    </Card>
  )
}

Profile.defaultProps = {
  outline: false,
  shadow: false
}

export default Profile
