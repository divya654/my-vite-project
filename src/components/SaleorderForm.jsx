import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Box, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SaleOrderForm = ({ defaultValues, onSubmit, readOnly }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues
  });

  return (
    <Box>
      <form onSubmit={readOnly ? (e) => e.preventDefault() : handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.invoice_date}>
          <FormLabel>Invoice Date</FormLabel>
          <Controller
            name="invoice_date"
            control={control}
            rules={{ required: 'Invoice date is required' }}
            render={({ field }) => <DatePicker {...field} selected={field.value} disabled={readOnly} />}
          />
          <FormErrorMessage>
            {errors.invoice_date && errors.invoice_date.message}
          </FormErrorMessage>
        </FormControl>
        {!readOnly && <Button type="submit" mt={4}>Submit</Button>}
      </form>
    </Box>
  );
};

export default SaleOrderForm;
