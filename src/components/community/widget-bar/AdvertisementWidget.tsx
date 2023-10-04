import React from 'react'
import { ADVERTISEMENT_LIST } from 'constants/advertisementList'
import { Img, ShadowBox } from 'styles/reusable-style/elementStyle'

const AdvertisementWidget = () => {
  const moveToDetail = () => {
    window.location.href = ADVERTISEMENT_LIST[1].url
  }

  return (
    <ShadowBox
      $background={ADVERTISEMENT_LIST[1].backgroundColor}
      $height="80px"
      $display="flex"
      $justifyContent="center"
      $cursor="pointer"
      onClick={moveToDetail}
    >
      <Img
        src={ADVERTISEMENT_LIST[1].img}
        alt={ADVERTISEMENT_LIST[1].sponsor}
        $width="100px"
      />
    </ShadowBox>
  )
}

export default AdvertisementWidget