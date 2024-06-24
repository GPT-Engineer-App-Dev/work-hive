import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast } from "@chakra-ui/react";

const JobApplicationForm = ({ jobId, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !resume) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Here we would typically send the application data to a server
    // For now, we'll just log it to the console
    console.log("Application submitted:", { jobId, name, email, resume });

    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    onClose();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Resume</FormLabel>
          <Textarea value={resume} onChange={(e) => setResume(e.target.value)} placeholder="Paste your resume or write a brief description of your qualifications" />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="100%">
          Submit Application
        </Button>
      </VStack>
    </Box>
  );
};

export default JobApplicationForm;