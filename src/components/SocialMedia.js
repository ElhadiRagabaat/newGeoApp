import React from 'react'
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
const SocialMedia = ({link}) => {
    const handleClicek=()=>{
        alert("button clicked")
    }
    return (
        <div className="flex items-center justify-center">
                        <Button
                            color="lightBlue"
                            buttonType="link"
                            ripple="dark"
                            rounded
                            iconOnly
                        >
                            <Icon
                                family="font-awesome"
                                name="fab fa-twitter"
                                size="lg"
                            />
                        </Button>
                        <Button onClick={()=>window.open({link})}
                            color="blue"
                            buttonType="link"
                            ripple="dark"
                            rounded
                            iconOnly
                        >
                            <Icon 
                                family="font-awesome"
                                name="fab fa-facebook-f"
                                size="lg"
                            />
                        </Button>
                        <Button onClick={()=>window.open({handleClicek})}
                            color="pink"
                            buttonType="link"
                            ripple="dark"
                            rounded
                            iconOnly
                            
                        >
                        
                            <Icon
                                family="font-awesome"
                                name="fab fa-dribbble"
                                size="lg"
                            />
                        </Button>
                    </div>
    )
}

export default SocialMedia
