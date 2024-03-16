import { useEffect, useState } from 'react';
import { Card } from '../../formFields/Card';
import axios from 'axios';

export const ReadSection = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        axios.get('https://dev.to/api/articles',{
            params: {
                username: 'mvcode'
            }
        })
        .then((response: any) => {
            console.log('teste', response)
            if(response.data) {
                setData(response.data)
            }
        })
    },[])

    return (
        <section
            id='skins'
            className='min-h-screen flex flex-col w-full items-center gap-10
            container mx-auto border-b-2 border-background_dark/10 py-10
            lg:justify-center
            dark:border-text_dark/20 
    '
        >
            <div>
                <h2
                    className="text-5xl font-semibold opacity-75 dark:text-text_dark dark:opacity-100"
                >Leitura Rapida</h2>
            </div>
            <div
                className="flex flex-wrap gap-6 w-full justify-center
                    lg:grid-col-3 lg:gap-6 
                "
            >
                {data.length> 0 && (
                    data.map((value: any,index: any) => {
                        return(
                            <Card
                                id={index}
                                src={value.cover_image}
                                title={value.title}
                                time={value.readable_publish_date}
                                description={value.description}
                                href={value.url}
                                tagList={value.tag_list}
                            />
                        )
                    })
                )}
            </div>
          
        </section>
    )
}