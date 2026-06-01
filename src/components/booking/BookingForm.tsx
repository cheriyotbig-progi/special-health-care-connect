import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { doctors } from '@/lib/data';
import { Calendar as CalendarIcon, Clock, User, Mail, FileText, CheckCircle2, Monitor, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  patientName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  doctorId: z.string().min(1, 'Please select a doctor'),
  type: z.enum(['virtual', 'in-person']),
  date: z.date({ message: 'Please select a date' }),
  time: z.string().min(1, 'Please select a time'),
  notes: z.string().optional(),
});

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: '',
      email: '',
      type: 'in-person',
      notes: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const doctor = doctors.find(d => d.id === values.doctorId);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      toast.success('Appointment booked successfully!');
      
      // Store in localStorage
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      appointments.push({
        id: Math.random().toString(36).substr(2, 9),
        doctorName: doctor?.name,
        ...values,
        date: format(values.date, 'PPP'),
        status: 'confirmed'
      });
      localStorage.setItem('appointments', JSON.stringify(appointments));
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center space-y-6 max-w-2xl mx-auto border border-slate-100">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-green-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Appointment Confirmed!</h2>
        <p className="text-slate-600">
          Thank you, {form.getValues('patientName')}. Your appointment has been scheduled. 
          A confirmation email has been sent to {form.getValues('email')}.
        </p>
        <div className="bg-slate-50 p-6 rounded-2xl text-left space-y-3">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500 text-sm font-medium">Doctor</span>
            <span className="text-slate-900 font-bold">{doctors.find(d => d.id === form.getValues('doctorId'))?.name}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500 text-sm font-medium">Date & Time</span>
            <span className="text-slate-900 font-bold">{format(form.getValues('date'), 'PPP')} at {form.getValues('time')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 text-sm font-medium">Type</span>
            <span className="text-slate-900 font-bold capitalize">{form.getValues('type')}</span>
          </div>
        </div>
        <Button onClick={() => setSubmitted(false)} className="rounded-full px-8">Book Another Appointment</Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="patientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-900 font-bold">Patient Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input placeholder="John Doe" className="pl-10 h-12 rounded-xl" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-900 font-bold">Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input placeholder="john@example.com" className="pl-10 h-12 rounded-xl" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="doctorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-900 font-bold">Select Doctor</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Choose a specialist" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {doctors.map(doctor => (
                        <SelectItem key={doctor.id} value={doctor.id}>
                          {doctor.name} ({doctor.specialty})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-slate-900 font-bold">Consultation Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2 border p-3 rounded-xl flex-1 cursor-pointer hover:bg-slate-50">
                        <RadioGroupItem value="in-person" id="in-person" />
                        <Label htmlFor="in-person" className="flex items-center cursor-pointer font-medium">
                          <MapPin className="h-4 w-4 mr-2 text-primary" /> In-Person
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-xl flex-1 cursor-pointer hover:bg-slate-50">
                        <RadioGroupItem value="virtual" id="virtual" />
                        <Label htmlFor="virtual" className="flex items-center cursor-pointer font-medium">
                          <Monitor className="h-4 w-4 mr-2 text-primary" /> Virtual
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-slate-900 font-bold">Preferred Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "h-12 rounded-xl pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-900 font-bold">Preferred Time Slot</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-xl">
                        <div className="flex items-center">
                           <Clock className="h-4 w-4 mr-2 text-slate-400" />
                           <SelectValue placeholder="Select time" />
                        </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'].map(time => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-900 font-bold">Symptoms or Additional Notes (Optional)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Textarea 
                      placeholder="Please briefly describe your symptoms..." 
                      className="pl-10 min-h-[120px] rounded-xl" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20">
            Confirm Booking
          </Button>
          <p className="text-center text-xs text-slate-500">
            By booking, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;