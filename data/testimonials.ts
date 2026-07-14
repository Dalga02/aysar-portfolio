// Testimonials will be added here as projects wrap up with clients.
// The Testimonials section currently shows a "Coming soon" state.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
};

export const testimonials: Testimonial[] = [];
