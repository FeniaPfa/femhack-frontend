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
        .range(['#cfebf4', '#169dd3']);
    return (
        <div style={{ width: '1000px' }}>
            <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 150,
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
                                        stroke="#d7f1fd"
                                        geography={geo}
                                        data-tooltip-id="my-tooltip"
                                        style={{
                                            hover: {
                                                fill: '#F53',
                                            },
                                            pressed: {
                                                fill: '#E42',
                                            },
                                        }}
                                        onMouseEnter={() => {
                                            setTooltipContent(`${geo.properties.name}: ${d ? numberFormatter(d?.users) : 0}`);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent('');
                                        }}
                                        fill={d ? colorScale(d['users']) : '#F5F4F6'}
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
