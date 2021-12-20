interface Props {
  children?: React.ReactChild
}

function CardBody({ children }: Props) {
  return <div className="pb-4">{children}</div>
}

export default CardBody
