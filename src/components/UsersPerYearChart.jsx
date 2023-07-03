import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { endPoints } from '../constant/API'
import { AreaChart, Card, Icon, Title } from '@tremor/react'
import { years } from '../constant/years'
import { UserGroupIcon } from '@heroicons/react/outline'
import { convertToB } from '../constant/utils'

export const UsersPerYearChart = () => {
  const [data, setData] = useState([])
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  const getData = async (year) => {
    const res = await axios.get(`${endPoints.getByYear}/${year}`)

    return { 'Total Internet Users': res.data.Data.Total, year }
  }

  const getAllYears = async () => {
    const result = await Promise.all(years.map((item) => getData(item)))
    setData(result)
  }

  useEffect(() => {
    getAllYears()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])

  return (
      <Card
        id="charts"
        className="drop-shadow-md"
        decoration="bottom"
        decorationColor="indigo"
      >
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
        <Title>
          <Icon
            icon={UserGroupIcon}
            variant="solid"
            color="purple"
            className="mr-3"
          />
          Internet users per year
        </Title>
        {data.length > 0 && (
          <AreaChart
            className="mt-6"
            data={data}
            index="year"
            categories={['Total Internet Users']}
            colors={['purple']}
            maxValue={data[data.length - 1]['Total Internet Users']}
            valueFormatter={convertToB}
          />
        )}
    </div>
      </Card>
  )
}
