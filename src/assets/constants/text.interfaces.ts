export interface NavbarType {
  title: string
  options: {
    id: number
    description: string
  }[]
}

export interface ProductType {
  content:
    {
      id: number
      name: string
      price: number
      img: string
      alt: string
      viewMore: string
    }[]
}