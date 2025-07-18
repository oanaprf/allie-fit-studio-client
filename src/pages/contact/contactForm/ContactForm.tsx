import { Button, Form, Input, message } from 'antd';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type FormValues = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          to_email: import.meta.env.VITE_EMAIL_ADDRESS,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      message.error(t('failedToSendEmail', { error }));
    } finally {
      setIsSubmitting(false);
    }
    message.success(t('emailSentSuccessfully'));
    form.resetFields();
  };

  return (
    <Form
      form={form}
      className="text-text-primary flex grow flex-col items-end justify-between"
      layout="vertical"
      onFinish={onSubmit}
    >
      <Form.Item name="name" label={t('name')} className="w-full" rules={[{ required: true }]}>
        <Input variant="filled" size="large" />
      </Form.Item>
      <Form.Item name="email" label={t('email')} className="w-full" rules={[{ required: true }]}>
        <Input variant="filled" size="large" />
      </Form.Item>
      <Form.Item
        name="message"
        label={t('message')}
        className="w-full"
        rules={[{ required: true }]}
      >
        <Input.TextArea variant="filled" size="large" rows={4} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          className="w-fit"
          size="large"
          htmlType="submit"
          loading={isSubmitting}
        >
          {t('send')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
