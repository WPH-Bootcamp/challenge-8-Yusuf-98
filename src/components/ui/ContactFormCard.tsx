import { useState } from 'react';
import type {
  ContactFormData,
  ContactFormState,
  ContactFormErrors,
  ServiceOption,
} from '../../types';
import SuccessPopup from './SuccessPopup';
import FailedPopup from './FailedPopup';
import Button from './Button';
import checkboxUnchecked from '../../assets/icons/checkbox-unchecked.png';
import checkboxChecked from '../../assets/icons/checkbox-checked.png';

// Popup static content
const SUCCESS_DATA = {
  title: 'Message Received!',
  description:
    "Thanks for reaching out — we'll get back to you as soon as possible.",
  buttonLabel: 'Back to Home',
};

const FAILED_DATA = {
  title: 'Oops! Something went wrong.',
  description:
    "We couldn't send your message. Please try again or check your connection.",
  buttonLabel: 'Try Again',
};

// ── Validasi ──//
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!form.name.trim()) errors.name = 'Name is required.';

  if (!form.email.trim()) errors.email = 'Email is required.';
  else if (!EMAIL_RE.test(form.email.trim()))
    errors.email = 'Please enter a valid email address.';

  if (!form.message.trim()) errors.message = 'Message is required.';
  else if (form.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';

  if (form.selectedServices.length === 0)
    errors.services = 'Please select at least one service.';

  return errors;
}

// ── Props helper supaya singkat ─── //
interface Props {
  data: ContactFormData;
}

// ── Component ── //
export default function ContactFormCard({ data }: Props) {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    selectedServices: ['web-development'],
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPopup, setShowPopup] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  // ── Helpers
  const markTouched = (field: string) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const toggleService = (id: string) => {
    setForm((prev) => {
      const next = prev.selectedServices.includes(id)
        ? prev.selectedServices.filter((s) => s !== id)
        : [...prev.selectedServices, id];

      if (next.length > 0) setErrors((e) => ({ ...e, services: undefined }));
      return { ...prev, selectedServices: next };
    });
  };

  const handleBlur = (field: keyof ContactFormErrors) => {
    markTouched(field);
    setErrors((prev) => ({ ...prev, ...validate(form) }));
  };

  const handleSubmit = async () => {
    setTouched({ name: true, email: true, message: true, services: true });
    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    try {
      await Promise.resolve();
      setShowPopup(true);
    } catch {
      setShowFailed(true);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    setForm({
      name: '',
      email: '',
      message: '',
      selectedServices: ['web-development'],
    });
    setErrors({});
    setTouched({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => {
    setShowFailed(false);
  };

  const col1: ServiceOption[] = data.services.slice(0, 3);
  const col2: ServiceOption[] = data.services.slice(3);

  return (
    <>
      {/* ── Success Popup ── */}
      <SuccessPopup
        data={SUCCESS_DATA}
        isOpen={showPopup}
        onClose={handleClose}
      />

      {/* ── Failed Popup ─── */}
      <FailedPopup
        data={FAILED_DATA}
        isOpen={showFailed}
        onRetry={handleRetry}
      />

      {/* ── Form Card ───*/}
      <div className='flex flex-col items-center justify-center gap-12 w-full max-w-180'>
        {/* Header */}
        <div className='flex flex-col items-start gap-4 w-full'>
          <h2 className='w-full text-center font-bold text-size-display-sm md:text-size-display-md lg:text-size-display-xl dark:text-neutral-25'>
            {data.title}
          </h2>
          <p className='w-full text-center font-medium text-size-sm md:text-size-md lg:text-size-lg text-neutral-400'>
            {data.subtitle}
          </p>
        </div>

        {/* Fields */}
        <div className='flex flex-col items-start gap-10 w-full'>
          <div className='flex flex-col items-start gap-5 w-full'>
            {/* ── Name ─── */}
            <div className='flex flex-col items-start gap-1.5 w-full'>
              <label className='font-bold text-size-sm dark:text-neutral-25'>
                Name
              </label>
              <input
                type='text'
                placeholder={data.namePlaceholder}
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (touched.name)
                    setErrors((prev) => ({
                      ...prev,
                      ...validate({ ...form, name: e.target.value }),
                    }));
                }}
                onBlur={() => handleBlur('name')}
                className={`
                  w-full rounded-lg px-4 py-2 outline-none
                  dark:bg-base-black border
                  font-medium text-size-md dark:text-neutral-25
                  placeholder:text-neutral-500
                  transition-colors
                  ${
                    touched.name && errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-neutral-800 focus:border-primary-200'
                  }
                `}
              />
              {touched.name && errors.name && (
                <span className='text-red-500 text-size-xs font-medium'>
                  {errors.name}
                </span>
              )}
            </div>

            {/* ── Email ── */}
            <div className='flex flex-col items-start gap-1.5 w-full'>
              <label className='font-bold text-size-sm dark:text-neutral-25'>
                Email
              </label>
              <input
                type='email'
                placeholder={data.emailPlaceholder}
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (touched.email)
                    setErrors((prev) => ({
                      ...prev,
                      ...validate({ ...form, email: e.target.value }),
                    }));
                }}
                onBlur={() => handleBlur('email')}
                className={`
                  w-full rounded-lg px-4 py-2 outline-none
                  dark:bg-base-black border
                  font-medium text-size-md dark:text-neutral-25
                  placeholder:text-neutral-500
                  transition-colors
                  ${
                    touched.email && errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-neutral-800 focus:border-primary-200'
                  }
                `}
              />
              {touched.email && errors.email && (
                <span className='text-red-500 text-size-xs font-medium'>
                  {errors.email}
                </span>
              )}
            </div>

            {/* ── Message ── */}
            <div className='flex flex-col items-start gap-1.5 w-full'>
              <label className='font-bold text-size-sm dark:text-neutral-25'>
                Message
              </label>
              <textarea
                placeholder={data.messagePlaceholder}
                value={form.message}
                rows={4}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (touched.message)
                    setErrors((prev) => ({
                      ...prev,
                      ...validate({ ...form, message: e.target.value }),
                    }));
                }}
                onBlur={() => handleBlur('message')}
                className={`
                  w-full rounded-lg px-4 py-2 outline-none resize-none
                  dark:bg-base-black border
                  font-medium text-size-md dark:text-neutral-25
                  placeholder:text-neutral-500
                  transition-colors
                  ${
                    touched.message && errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-neutral-800 focus:border-primary-200'
                  }
                `}
              />
              {touched.message && errors.message && (
                <span className='text-red-500 text-xs leading-5 font-medium'>
                  {errors.message}
                </span>
              )}
            </div>

            {/* ── Services ── */}
            <div className='flex flex-col items-start gap-3.5 w-full'>
              <label className='font-bold text-size-sm dark:text-neutral-25'>
                {data.servicesLabel}
              </label>

              <div className='flex flex-col md:flex-row gap-3.5 md:gap-3.5'>
                <div className='flex flex-col gap-4 flex-1 w-76'>
                  {col1.map((service) => (
                    <ServiceCheckbox
                      key={service.id}
                      service={service}
                      checked={form.selectedServices.includes(service.id)}
                      onToggle={toggleService}
                    />
                  ))}
                </div>
                <div className='flex flex-col gap-4 flex-1'>
                  {col2.map((service) => (
                    <ServiceCheckbox
                      key={service.id}
                      service={service}
                      checked={form.selectedServices.includes(service.id)}
                      onToggle={toggleService}
                    />
                  ))}
                </div>
              </div>

              {touched.services && errors.services && (
                <span className='text-red-500 text-size-xs font-medium'>
                  {errors.services}
                </span>
              )}
            </div>
          </div>

          <Button
            background='orange'
            size='md'
            type='button'
            onClick={handleSubmit}
            className='w-full'
          >
            {data.submitLabel}
          </Button>
        </div>
      </div>
    </>
  );
}

// ── Service Checkbox ── //
interface CheckboxProps {
  service: ServiceOption;
  checked: boolean;
  onToggle: (id: string) => void;
}

function ServiceCheckbox({ service, checked, onToggle }: CheckboxProps) {
  return (
    <div
      role='checkbox'
      aria-checked={checked}
      tabIndex={0}
      onClick={() => onToggle(service.id)}
      onKeyDown={(e) =>
        (e.key === ' ' || e.key === 'Enter') && onToggle(service.id)
      }
      className='flex flex-row items-center gap-3 cursor-pointer select-none h-7.5'
    >
      <img
        src={checked ? checkboxChecked : checkboxUnchecked}
        alt={checked ? 'checked' : 'unchecked'}
        width={20}
        height={20}
        className='shrink-0'
      />
      <span className='font-medium text-size-sm md:text-size-md dark:text-neutral-25'>
        {service.label}
      </span>
    </div>
  );
}
