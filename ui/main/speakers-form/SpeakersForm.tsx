import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, Checkbox, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Option } = Select;

type SponsorFormValues = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  email: string;
  mobileNumber: string;
  interestedIn: string;
  consent: boolean;
  terms: boolean;
};

const SpeakersEnquiryForm: React.FC = () => {
  const [form] = Form.useForm(); // Ant Design's useForm hook
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission using fetch API
  const onFinish = async (values: SponsorFormValues) => {
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
        <h2 className="text-2xl font-semibold mb-6">Speakers Enquiry</h2>
        <Form
          form={form}
          name="sponsor-enquiry"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "First name is required" }]}
              className="md:w-1/2 font-bold"
            >
              <Input className="h-[40px]" placeholder="First Name" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              className="md:w-1/2 font-bold"
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <Input className="h-[40px]" placeholder="Last Name" />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="Job Title"
              name="jobTitle"
              className="md:w-1/2 font-bold"
              rules={[{ required: true, message: "Job title is required" }]}
            >
              <Input className="h-[40px]" placeholder="Job Title" />
            </Form.Item>

            <Form.Item
              label="Company Name"
              name="companyName"
              className="md:w-1/2 font-bold"
              rules={[{ required: true, message: "Company name is required" }]}
            >
              <Input className="h-[40px]" placeholder="Company Name" />
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row w-full md:gap-2">
            <Form.Item
              label="Email"
              name="email"
              className="md:w-1/2 font-bold"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Enter a valid email",
                },
              ]}
            >
              <Input className="h-[40px]" placeholder="Email" />
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
                placeholder="Mobile"
                onChange={(e) => {
                  const { value } = e.target;
                  if (!/^[0-9]*$/.test(value)) {
                    e.target.value = value.replace(/\D/g, ""); // Remove any non-digit characters
                  }
                }}
              />
            </Form.Item>
          </div>

          <Form.Item
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
          </Form.Item>

          <Form.Item
            name="consent"
            valuePropName="checked"
            className="md:w-1/2 font-bold"
            rules={[
              {
                required: true,
                message: "Please provide consent to share your details",
              },
            ]}
          >
            <Checkbox>
              I agree to my contact details being shared with the event's
              sponsors/partners.
            </Checkbox>
          </Form.Item>

          <Form.Item
            name="terms"
            valuePropName="checked"
            className="md:w-1/2 font-bold"
            rules={[{ required: true, message: "You must accept the terms" }]}
          >
            <Checkbox>
              I agree to the{" "}
              <a
                href="https://example.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                href="https://example.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Privacy Policy
              </a>
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
                  indicator={
                    <LoadingOutlined
                      spin
                      style={{ color: "red" }}
                    />
                  }
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
