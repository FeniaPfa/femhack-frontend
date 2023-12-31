import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { endPoints } from '../constant/API'
import { Card, Title, BarChart, Select, Icon, SelectItem } from '@tremor/react'
import { numberFormatter } from '../constant/utils'
import { ChartBarIcon } from '@heroicons/react/outline'

export const UsersByCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState('Chile')
  const [countries, setCountries] = useState([])
  const [data, setData] = useState([])
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  // Fetch the list of countries when the component mounts
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(endPoints.countries)
        setCountries(response.data.Countries)
      } catch (error) {
        console.error('Error fetching countries:', error)
      }
    }
    fetchCountries()
  }, [])

  // Fetch the data for the selected country when it changes
  useEffect(() => {
    const fetchData = async () => {
      if (selectedCountry) {
        // Only fetch if a country is selected
        try {
          const response = await axios.get(
            `http://localhost:8080/country/${selectedCountry}`
          )

          const formattedData = Object.keys(response.data.Data)
            .filter((year) => Number(year >= 1989))
            .map((year) => {
              return {
                year: Number(year), // convert the year to a number
                'Users of internet':
                  Number(response.data.Data[year].internet_users_number) || 0,
              }
            })

          console.log(`${selectedCountry}`, formattedData)
          setData(formattedData) // Assume the response data is the data for the country
        } catch (error) {
          console.error('Error fetching data for country:', error)
        }
      }
    }
    fetchData()
  }, [selectedCountry])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <Card
      className="drop-shadow-md"
      decoration="bottom"
      decorationColor="indigo"
    >
        <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      <div className="flex md:flex-row justify-between flex-col gap-6 items-center">
        <Title>
          <Icon
            icon={ChartBarIcon}
            variant="solid"
            color="purple"
            className="mr-3"
          />
          Internet users by country and year
        </Title>
        <Select
          onValueChange={setSelectedCountry}
          value={selectedCountry}
          placeholder="Country Selection"
          className="max-w-xs mt-3"
        >
          {countries
            ? countries.map((country, index) => (
                <SelectItem key={index} value={country}>
                  {country}
                </SelectItem>
              ))
            : null}
        </Select>
      </div>
      {Array.isArray(data) ? (
        <BarChart
          className="mt-6"
          data={data}
          index="year"
          categories={['Users of internet']} // this should be an array
          colors={['purple']}
          valueFormatter={numberFormatter}
          yAxisWidth={70}
          autoMinValue={true}
        />
      ) : (
        console.error('Data is not an array:', data)
      )}
      </div>
    </Card>
  )
}
