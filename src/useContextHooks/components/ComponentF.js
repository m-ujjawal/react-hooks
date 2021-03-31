import React from 'react'
import { UserContext, ChannelContext } from '../../App'

function ComponentF() {
    return (
        <div>
            {/*
            //It's easy to consume if we have single context but 
            //it's very difficult if we have multiple context like userContext and channelContext
             <UserContext.Consumer>
                {user => {
                    return <div> User context value {user} </div>
                }}
            </UserContext.Consumer> */}

            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return (
                                        <div> User context value {user},
                                        hannel context value {channel} </div>
                                    )
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}
export default ComponentF