import styles from "./Twitter.module.css";

export default function Discord({ fill }: { fill?: string }) {
  return (
    <a href="" target="_blank" className={styles.logo}>
      <svg
        width="31"
        height="24"
        viewBox="0 0 31 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.2274 2.13721C24.2527 1.23114 22.1352 0.563594 19.9212 0.181261C19.8809 0.173882 19.8406 0.192322 19.8198 0.229204C19.5475 0.713572 19.2458 1.34547 19.0346 1.84214C16.6532 1.48563 14.2841 1.48563 11.9517 1.84214C11.7404 1.33443 11.4278 0.713572 11.1542 0.229204C11.1334 0.193553 11.0931 0.175112 11.0528 0.181261C8.84003 0.562372 6.72249 1.22992 4.74659 2.13721C4.72948 2.14458 4.71482 2.15689 4.70509 2.17286C0.68856 8.17347 -0.411736 14.0266 0.128033 19.8071C0.130475 19.8354 0.14635 19.8625 0.168332 19.8797C2.81832 21.8258 5.38529 23.0072 7.9046 23.7903C7.94492 23.8026 7.98764 23.7879 8.01329 23.7547C8.60924 22.9408 9.14047 22.0827 9.59594 21.1803C9.62282 21.1275 9.59716 21.0648 9.54222 21.0439C8.69961 20.7243 7.89727 20.3345 7.12547 19.892C7.06442 19.8563 7.05954 19.769 7.11569 19.7272C7.27811 19.6055 7.44057 19.4789 7.59565 19.351C7.62371 19.3277 7.66281 19.3227 7.6958 19.3375C12.7662 21.6524 18.2554 21.6524 23.266 19.3375C23.299 19.3215 23.3381 19.3264 23.3674 19.3498C23.5225 19.4776 23.6849 19.6055 23.8485 19.7272C23.9047 19.769 23.901 19.8563 23.84 19.892C23.0682 20.3431 22.2658 20.7243 21.422 21.0427C21.3671 21.0636 21.3426 21.1275 21.3695 21.1803C21.8348 22.0815 22.366 22.9396 22.9509 23.7534C22.9754 23.7879 23.0193 23.8026 23.0596 23.7903C25.5912 23.0072 28.1581 21.8258 30.8081 19.8797C30.8313 19.8625 30.846 19.8366 30.8484 19.8084C31.4944 13.1254 29.7664 7.32029 26.2677 2.17408C26.2591 2.15689 26.2445 2.14458 26.2274 2.13721ZM10.3531 16.2874C8.82659 16.2874 7.56877 14.8859 7.56877 13.1648C7.56877 11.4436 8.8022 10.0422 10.3531 10.0422C11.9162 10.0422 13.1619 11.4559 13.1374 13.1648C13.1374 14.8859 11.904 16.2874 10.3531 16.2874ZM20.6478 16.2874C19.1213 16.2874 17.8635 14.8859 17.8635 13.1648C17.8635 11.4436 19.0968 10.0422 20.6478 10.0422C22.2109 10.0422 23.4565 11.4559 23.4321 13.1648C23.4321 14.8859 22.2109 16.2874 20.6478 16.2874Z"
          fill={fill}
        />
      </svg>
    </a>
  );
}
