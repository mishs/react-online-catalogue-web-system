import React from 'react'
import styled from 'styled-components'
import Prices from '../ListItem/Prices'

const DetailStyles = styled.div`
    width: 100%;

    .text-details{
        margin-bottom: 45px;
    }

    .image-detail{
        h4{
            padding: 40px 20px;
            background: #F8F8F8;
        }
        .img_container{
            width: 100%;
            height: 500px;
            background: #F8F8F8;

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
`

function Detail(props) {
    return (
        <DetailStyles>
            <div className="text-details">
                <h4 className="font-xl font-500">{props.title}</h4>
                <Prices fontSize="font-lg font-600" {...props} />
            </div>
            <div className="image-detail">
                <h4 className="font-500 font-lg">Available at {props.shopName}</h4>
                <div className="img_container">
                    <img src={props.thumbnail} alt="" />
                </div>
            </div>
        </DetailStyles>
    )
}

export default Detail
