import React, { useState } from "react";
import { Box, Container, Heading, VStack, HStack, Text, Input, Button, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import JobPostingForm from "../components/JobPostingForm";

const JobCard = ({ job }) => {
  const cardBg = useColorModeValue("white", "gray.700");
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
      <Heading fontSize="xl">{job.title}</Heading>
      <Text mt={2}>{job.company}</Text>
      <HStack mt={2}>
        <FaMapMarkerAlt />
        <Text>{job.location}</Text>
      </HStack>
      <HStack mt={2}>
        <FaMoneyBillWave />
        <Text>{job.salary}</Text>
      </HStack>
      <Button mt={4} colorScheme="blue">Apply Now</Button>
    </Box>
  );
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobListings, setJobListings] = useState([
    { id: 1, title: "Software Engineer", company: "Tech Co", location: "San Francisco, CA", salary: "$120,000 - $150,000" },
    { id: 2, title: "Product Manager", company: "Innovate Inc", location: "New York, NY", salary: "$100,000 - $130,000" },
    { id: 3, title: "UX Designer", company: "Design Hub", location: "Austin, TX", salary: "$90,000 - $120,000" },
    { id: 4, title: "Data Scientist", company: "Data Insights", location: "Seattle, WA", salary: "$130,000 - $160,000" },
    { id: 5, title: "Marketing Specialist", company: "Brand Builders", location: "Chicago, IL", salary: "$70,000 - $90,000" },
  ]);

  const handleAddJob = (newJob) => {
    setJobListings([...jobListings, newJob]);
  };

  const bgColor = useColorModeValue("gray.50", "gray.800");

  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">Job Listings</Heading>
          
          <HStack as="form" spacing={4}>
            <Input
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="lg"
              bg={useColorModeValue("white", "gray.700")}
            />
            <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" type="submit">
              Search
            </Button>
          </HStack>

          <Box mb={8}>
            <Heading as="h2" size="lg" mb={4}>Post a New Job</Heading>
            <JobPostingForm onAddJob={handleAddJob} />
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </SimpleGrid>

          {filteredJobs.length === 0 && (
            <Text textAlign="center" fontSize="lg">No jobs found. Try a different search term.</Text>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;