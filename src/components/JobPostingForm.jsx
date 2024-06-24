import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";

const JobPostingForm = ({ onAddJob }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !company || !location || !salary) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const newJob = {
      id: Date.now(),
      title,
      company,
      location,
      salary,
    };
    onAddJob(newJob);
    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");
    toast({
      title: "Job Posted",
      description: "Your job listing has been added successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Job Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Software Engineer" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Company</FormLabel>
          <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g. Tech Co" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. San Francisco, CA" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Salary Range</FormLabel>
          <Input value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="e.g. $120,000 - $150,000" />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="100%">
          Post Job
        </Button>
      </VStack>
    </Box>
  );
};

export default JobPostingForm;