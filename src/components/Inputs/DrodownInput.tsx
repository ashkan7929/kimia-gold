import React from 'react'

const DrodownInput = () => {
  return (
      <div className="mb-3">
                <label className="font-semibold text-8xl-custom font-peyda text-white"> موضوع</label>
                <select className="flex items-center text-white rounded-default border-light border px-smal w-full">
                  <option value="1">
                    خرید محصولات
                  </option>
                  <option value="2">
                    شکایات 
                  </option>
                </select>
              </div>
  )
}

export default DrodownInput