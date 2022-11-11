import React from 'react'
import Counter from '../tests/Counter'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const CategoriesPage = () => {
  window.top.document.title = 'Fixxo. || Categories'

  return (
    <>
        <Topmenu />
        <SiteTitle title="Categories" />
        <Counter />
    </>
  )
}

export default CategoriesPage