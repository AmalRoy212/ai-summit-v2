import React, { useState } from "react";
import { Form, Input, Button, Select, Checkbox, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { validateEmail } from "@/utils/emailValidator";
import Uploader from "@/ui/sub/uploader/Uploader";

const { Option } = Select;

type SponsorFormValues = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  email: string;
  mobile: string; // This should match the form field
  directLine: string;
  city?: string; // City is optional in the form, so it should be marked as optional
  country: string;
  industry: string;
  twitter?: string; // Optional in the form
  linkedin?: string; // Optional in the form
  professionalBio?: string; // Optional in the form
  consent: boolean;
  terms: boolean;
};

const SpeakersEnquiryForm: React.FC = () => {
  const [form] = Form.useForm(); // Ant Design's useForm hook
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission using fetch API
  const onFinish = async (values: SponsorFormValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/speakers/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Form submitted successfully!");
        form.resetFields(); // Clear the form after submission
      } else {
        message.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Error occurred during submission.");
    }
    setLoading(false);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  return (
    <div
      className="flex justify-center items-center rounded-2xl"
      style={{
        borderWidth: 1,
        backgroundImage: 'url("images/statics/delegate.jpg")',
      }}
    >
      <div className="p-8 rounded-lg shadow-lg w-full">
        {/* <h2 className="text-2xl font-semibold mb-6">Speakers Registration </h2> */}
        <Form
          form={form}
          name="sponsor-enquiry"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="space-y-4"
        >
          <div className="w-full flex justify-center">
            {/* <Uploader/> */}
            {/* <Form.Item
              label="Upload your image"
              name="image"
              rules={[{ required: true, message: "Upload the image" }]}
              className="md:w-1/2 font-bold"
            >
              <Input type="file" className="h-[40px]" />
            </Form.Item> */}
          </div>
          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "First name is required" }]}
              className="md:w-1/2 font-bold"
            >
              <Input className="h-[40px]" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              className="md:w-1/2 font-bold"
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <Input className="h-[40px]" />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="Job Title"
              name="jobTitle"
              className="md:w-1/2 font-bold"
              rules={[{ required: true, message: "Job title is required" }]}
            >
              <Input className="h-[40px]" />
            </Form.Item>

            <Form.Item
              label="Company Name"
              name="companyName"
              className="md:w-1/2 font-bold"
              rules={[{ required: true, message: "Company name is required" }]}
            >
              <Input className="h-[40px]" />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              className="md:w-1/2 font-bold"
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
                {
                  validator: (_, value) => {
                    const validationResult = validateEmail(value); // Call validateEmail
                    if (validationResult) {
                      return Promise.reject(new Error(validationResult)); // If there is an error message, reject the promise
                    }
                    return Promise.resolve(); // Otherwise, resolve the promise
                  },
                },
              ]}
            >
              <Input className="h-[40px]" />
            </Form.Item>

            <Form.Item
              className="md:w-1/2 font-bold"
              label="Mobile"
              name="mobile"
              rules={[
                { required: true, message: "Please input your mobile number!" },
                {
                  validator: (_, value) => {
                    if (!value || /^[0-9]*$/.test(value)) {
                      return Promise.resolve(); // valid input, resolve the promise
                    }
                    return Promise.reject(
                      new Error("Mobile number must contain only numbers!")
                    );
                  },
                },
              ]}
            >
              <Input
                className="h-[40px]"
                onChange={(e) => {
                  const { value } = e.target;
                  if (!/^[0-9]*$/.test(value)) {
                    e.target.value = value.replace(/\D/g, ""); // Remove any non-digit characters
                  }
                }}
              />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="Direct Line"
              name="directLine"
              rules={[{ required: true, message: "Direct line is required" }]}
              className="md:w-1/2 font-bold"
            >
              <Input className="h-[40px]" />
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "City is required" }]} // Add validation rule
              className="md:w-1/2 font-bold"
            >
              <Input className="h-[40px]" />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: "Country is required" }]}
              className="md:w-1/2 font-bold"
            >
              <Input className="h-[40px]" />
            </Form.Item>

            <Form.Item
              label="Industry"
              name="industry"
              rules={[{ required: true, message: "Industry is required" }]}
              className="md:w-1/2 font-bold"
            >
              <Select className="h-[40px]">
                <Option value="Oil and Gas">Oil and Gas</Option>
                <Option value="Telecommunications">Telecommunications</Option>
                <Option value="Banking">Banking</Option>
                <Option value="Insurance">Insurance</Option>
                <Option value="Manufacturing">Manufacturing</Option>
                <Option value="Retail">Retail</Option>
                <Option value="Healthcare">Healthcare</Option>
                <Option value="Government and Public Sector">
                  Government and Public Sector
                </Option>
                <Option value="Defence & Space">Defence & Space</Option>
                <Option value="Utilities">Utilities</Option>
                <Option value="Transportation and Logistics">
                  Transportation and Logistics
                </Option>
                <Option value="Real Estate and Construction">
                  Real Estate and Construction
                </Option>
                <Option value="Education">Education</Option>
                <Option value="Financial Services">Financial Services</Option>
                <Option value="E-commerce">E-commerce</Option>
                <Option value="Aviation">Aviation</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="Twitter"
              name="twitter"
              rules={[
                {
                  required: true,
                  type: "url",
                  message: "Please enter a valid Twitter URL!", // Add URL validation for Twitter
                },
              ]}
              className="md:w-1/2 font-bold"
            >
              <Input className="h-[40px]" />
            </Form.Item>

            <Form.Item
              label="LinkedIn"
              name="linkedin"
              rules={[
                {
                  required: true,
                  type: "url",
                  message: "Please enter a valid LinkedIn URL!", // Add URL validation for LinkedIn
                },
              ]}
              className="md:w-1/2 font-bold"
            >
              <Input className="h-[40px]" />
            </Form.Item>
          </div>

          <Form.Item
            label="Professional Bio"
            name="professionalBio"
            rules={[
              { required: true, message: "Professional Bio is required" }, // Add required rule for Professional Bio
              { max: 500, message: "Bio cannot be longer than 500 characters" }, // Optional: Add length constraint
            ]}
            className="font-bold"
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          {/* <Form.Item
            label="I'm interested in"
            name="interestedIn"
            className="md:w-1/2 font-bold"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Radio.Group>
              <Radio value="Exhibition Space">Exhibition Space</Radio>
              <Radio value="Speaking Opportunity">Speaking Opportunity</Radio>
              <Radio value="1:1 Meetings">1:1 Meetings</Radio>
              <Radio value="Post-show Reports">Post-show Reports</Radio>
              <Radio value="Delegate List">Delegate List</Radio>
            </Radio.Group>
          </Form.Item> */}

          <Form.Item
            name="consent"
            valuePropName="checked"
            className="font-bold"
            rules={[
              {
                required: true,
                message: "Please provide consent to share your details",
              },
            ]}
          >
            <Checkbox>
              I agree to be contacted via phone call or WhatsApp for further
              discussions.
            </Checkbox>
          </Form.Item>

          <Form.Item
            name="terms"
            valuePropName="checked"
            className="font-bold"
            rules={[{ required: true, message: "You must accept the terms" }]}
          >
            <Checkbox>
              I agree to the{" "}
              <a className="text-blue-700" href="/terms-conditions">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a className="text-blue-700" href="/privacy-policy">
                Privacy Policy
              </a>{" "}
              .
            </Checkbox>
          </Form.Item>

          <Form.Item className="w-full flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 px-20 mt-10"
            >
              {loading ? (
                <Spin
                  indicator={<LoadingOutlined spin style={{ color: "red" }} />}
                  size="small"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SpeakersEnquiryForm;
