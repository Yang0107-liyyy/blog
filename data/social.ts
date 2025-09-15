export type Social = {
  github?: string
  email?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  github: 'https://github.com/Yang0107-liyyy',
  email: 'mailto:liyany0107@gmail.com',
}

const socialSet: Record<keyof Social, SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#a984beff',
  },
  email: {
    href: social.email,
    title: '邮箱',
    icon: 'ri:mail-line',
    color: '#38a5d4ff',
  }
}

export default socialSet
