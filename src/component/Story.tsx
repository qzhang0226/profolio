import React from 'react';
import { IAppProps } from '../interfaces';
import styled from 'styled-components';

interface storyDivProps {
    bgColor: string;
}

export default function Story (props: IAppProps) {

    return (
        props.data ?
        <Wrapper bgColor={props.data.quotation[0].bgColor}>
            <div className="container">
                <div className="offset-md-2 col-md-8 offset-md-2">
                    <div className="top">
                        {props.data.quotation[0].sentence}
                    </div>
                    <div className="bottom">
                        {props.data.quotation[0].from}
                    </div>
                </div>
            </div>
        </Wrapper>
        :
        <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    )
}

const Wrapper = styled.section`
    /* background: ${(props: storyDivProps) => props.bgColor}; */
    background: #E3F2F3;
    height: auto;
    padding: 2.5em 0 2.5em 0;   
    font-size: 1.15em;
    .container{
        margin-top: 5em;
        margin-bottom: 5em;
        text-align: center;
    }
    .top{
        padding-bottom: 1em;
    }
`
