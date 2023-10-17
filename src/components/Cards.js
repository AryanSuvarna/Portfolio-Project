import { Heading, Image, Text, Card, CardBody, CardHeader, CardFooter} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <Card style={{position: "unset"}} >
            <Image src={imageSrc} alt={title} borderRadius="lg" />
                    <CardHeader>
                        <Heading>{title}</Heading>
                    </CardHeader>
                    <CardBody>
                        {description}
                    </CardBody>
                    <CardFooter>
                        <Text>
                            See More
                            <FontAwesomeIcon icon={faArrowRight} size="1x" style={{paddingLeft: "1em"}}/>
                        </Text>
                        
                    </CardFooter>
                
        </Card>
    )
    
};

export default Cards;
