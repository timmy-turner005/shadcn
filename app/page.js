import SubscriptionForm from "./components/subscription-form";
import Subscribers from "./components/subscribers";
import RegistrationForm from "./components/registration";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-around p-4">
      <SubscriptionForm />

      <RegistrationForm />
    </div>
  );
}
