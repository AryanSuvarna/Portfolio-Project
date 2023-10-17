import React, {useEffect, useState, useRef} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen, onClose} = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: 'hireMe' | 'connect' | 'other',
      comment: ""
    },
    initialTouched :{},
    onSubmit:(values) => {
      submit(URL, values)
      
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required. I want to know whos messaging me :)"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
  });

  // when loading up website, LandingSection runs twice. useRef is a persitent variable.
  const initialRender = useRef(2);

  useEffect(() => {
    console.log("This is response val", response)
    if (initialRender.current != 0) {
      // do this to ignore the inital render
      initialRender.current = initialRender.current - 1
    }
    else {
      onOpen(response.type, response.message)
      if (response.type == 'success') {
        formik.resetForm()
      }
    }
  }, [response])

  // BETTER IMPLEMENTATION
  // useEffect(() => {
  //   if(response){
  //     onOpen(response.type, response.message);

  //     if (response.type === 'success'){
  //       formik.resetForm();
  //     }
  //   }
  // }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%" >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} >
              
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName" >Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>
                  {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>
                    {formik.errors.email}
                </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe" style={{color: "black"}}>
                    Job Oppurtunities
                  </option>
                  <option value="connect" style={{color: "black"}}>
                    Connect
                  </option>
                  <option value="other" style={{color: "black"}}>
                    Other
                  </option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full" isDisabled={!formik.isValid} isLoading={isLoading} loadingText="Submitting">
                Submit
              </Button>

            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
