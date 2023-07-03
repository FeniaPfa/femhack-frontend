/* eslint-disable react/prop-types */
// import { csv } from "d3-fetch";
import { scaleLinear } from 'd3-scale';
import { memo } from 'react';
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from 'react-simple-maps';
import { numberFormatter } from '../constant/utils';

const geoUrl = '/features.json';

const MapChart = ({ setTooltipContent, data }) => {
    const users = data.map((item) => item.users);

    const colorScale = scaleLinear()
        .domain([Math.min(...users), Math.max(...users)])
        .range(['#cffafe', '#6b21a8']);
    return (
        <div className="text-center px-6">
            <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 147,
                }}>
                <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                <Graticule stroke="#bcbdc9" strokeWidth={0.5} />
                {data.length > 0 && (
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const d = data.find((s) => s.country === geo.properties.name);
                                // console.log(d);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        stroke="#1e1b4b"
                                        strokeWidth={0.2}
                                        geography={geo}
                                        data-tooltip-id="my-tooltip"
                                        style={{
                                            hover: {
                                                fill: '#6366f1',
                                            },
                                            pressed: {
                                                fill: '#6366f1',
                                            },
                                        }}
                                        onMouseEnter={() => {
                                            setTooltipContent(
                                                `${geo.properties.name}: ${d ? numberFormatter(d?.users) : 'none'}`
                                            );
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent('');
                                        }}
                                        fill={d ? colorScale(d['users']) : '#ddd6fe'}
                                    />
                                );
                            })
                        }
                    </Geographies>
                )}
            </ComposableMap>
        </div>
    );
};

export const MemoChart = memo(MapChart);
