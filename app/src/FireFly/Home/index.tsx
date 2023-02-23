import {MetaDataTable} from './MetaDataTable';
import {HotSpotMap} from './HotspotMap';
import {FC, useState} from 'react';
import {gridstyle, Props} from '../Common/styles';
import {DataProvider} from './DataProvider';

const area = {
    map: 'map',
    metadata: 'metadata',
};

const defaultStyle:React.CSSProperties = {
    ...gridstyle,
    gridTemplate: `
    " ${area.map} ${area.map} " auto
    / 0.4fr       1fr `
};

const metaDataStyle:React.CSSProperties = {
    ...gridstyle,
    gridTemplate: `
    " ${area.metadata} ${area.map} " auto
    / 0.4fr       1fr `
};

export const Home:FC<Props> = ({style}) => {

    const [noMetaData, setNoMetaData] = useState<boolean>(true)

    return (
        <DataProvider.Provider value={{
            setNoMetaData: setNoMetaData,
            noMetaData: noMetaData
        }}
        >
            {!noMetaData && 
                <div style={{
                    ...style,
                    ...metaDataStyle,
                }}>
                    <MetaDataTable style={{gridArea: area.metadata}}/>
                    <HotSpotMap style={{gridArea: area.map}} />
                </div>
            }
            {noMetaData && 
                <div style={{
                    ...style,
                    ...defaultStyle,
                }}>
                    <HotSpotMap style={{gridArea: area.map}} />
                </div>
            }
        </DataProvider.Provider>
        )
}

  