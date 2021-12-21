interface IProps {
  size: number
}

function Avatar({ size }: IProps) {
  return <img src={`http://picsum.photos/${size}`} alt="" className="rounded-full" />
}

Avatar.defaultProps = {
  size: 50
}

export default Avatar
