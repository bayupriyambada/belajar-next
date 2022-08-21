import { useRouter } from 'next/router'

function ActiveLink({ children, href, className }) {
  const router = useRouter()
  const style = {
    color: router.asPath === href ? 'red' : 'white',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} className={className} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink
