import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 `}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain rounded-[15px] hover:cursor-pointer hover:shadow-[8px_20px_40px_-22px_rgba(255,255,255,1)]  duration-300 p-4 " />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;