"use client";
import React, { useState } from 'react';
import { Form, InputNumber, Select, Modal } from "antd";
import SectionHeading from './shared/SectionHeading';
const BMI: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [bmiValue, setBmiValue] = useState<number | null>(null);
    const [form] = Form.useForm();
    const calculateBMI = ({ weight, height }: { weight: number; height: number }) =>
        parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));
    const onFinish = (values: { weight: number; height: number }) => {
        setBmiValue(calculateBMI(values));
        setIsModalVisible(true);
        form.resetFields();
    };
    return (
        <section className='max-w-[1320px] mx-auto my-10'>
            <div className="flex lg:flex-row flex-col lg:gap-[136px] items-center">
                <div className="lg:basis-1/2 basis-full border border-[#D9D9D9] p-[24px]">
                    <h4 className="text-[28px] font-bold py-10 pr-6 font-montserrat">BMI Chart</h4>
                    <table className="border border-[#D9D9D9] w-full rounded">
                        <thead>
                            <tr className="rounded flex font-bold border-b border-[#D9D9D9] font-montserrat">
                                <th className="h-[66px] pr-0 md:pr-48 w-1/2 pt-5 border-r border-[#D9D9D9]">BMI</th>
                                <th className="h-[66px] pr-0 md:pr-28 pt-5 w-1/2">Weight Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { range: "Below 18.5", status: "Underweight" },
                                { range: "18.5 - 24.9", status: "Healthy" },
                                { range: "25.0 - 29.9", status: "Overweight" },
                                { range: "30.0 - Above", status: "Obese" }
                            ].map(({ range, status }, idx) => (
                                <tr key={idx} className="flex border-b border-[#D9D9D9] rounded">
                                    <td className="h-[66px] w-1/2 border-r border-[#D9D9D9] flex pl-6 items-center">{range}</td>
                                    <td className="h-[66px] w-1/2 flex pl-6 items-center">{status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="lg:basis-1/2 basis-full my-10">
                    <SectionHeading subHeading='body mass index' heading='calculate your BMI' />
                    <p className="my-10 para2">Use our BMI calculator to quickly assess if you are at a healthy weight based on your height and weight. Track your progress and stay on the path to better health.</p>
                    <Form form={form} onFinish={onFinish} className='mt-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <Form.Item className='md:mr-4' name="weight" rules={[{ required: true, message: "Please input weight!" }]}>
                                <InputNumber className='w-full p-3' placeholder="Weight / KG *" />
                            </Form.Item>
                            <Form.Item className='md:ml-4' name="height" rules={[{ required: true, message: "Please input height!" }]}>
                                <InputNumber className='w-full p-3' placeholder="Height / CM *" />
                            </Form.Item>
                            <Form.Item className='md:mr-4 mt-2' name="age" rules={[{ required: true, message: "Please input age!" }]}>
                                <InputNumber className='w-full p-3' placeholder="Age *" />
                            </Form.Item>
                            <Form.Item className=' md:ml-4 mt-2' name="gender" rules={[{ required: true, message: "Please select gender!" }]}>
                                <Select className='h-[55px]' placeholder="Gender">
                                    <Select.Option value="male">Male</Select.Option>
                                    <Select.Option value="female">Female</Select.Option>
                                    <Select.Option value="other">Other</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <Form.Item className='w-full mt-2' name="activityFactor" rules={[{ required: true, message: "Please select an activity factor!" }]}>
                            <Select className='h-[55px]' placeholder="Select an Activity Factor">
                                <Select.Option value="sedentary">Sedentary</Select.Option>
                                <Select.Option value="light">Lightly Active</Select.Option>
                                <Select.Option value="moderate">Moderately Active</Select.Option>
                                <Select.Option value="active">Active</Select.Option>
                                <Select.Option value="very_active">Very Active</Select.Option>
                            </Select>
                        </Form.Item>
                        <button className="button mt-9"> Calculate</button>
                    </Form>
                    <Modal title="Your BMI Result" visible={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={null}> <p>Your BMI is: <strong>{bmiValue}</strong></p>  </Modal>
                </div>
            </div>
        </section>
    );
};
export default BMI;
