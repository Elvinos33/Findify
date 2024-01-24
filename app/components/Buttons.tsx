import { Icon } from "@iconify/react/dist/iconify.js";

export function DislikeButton() {
  return (
    <button
      className={`invisible md:visible btn btn-circle bg-primary-content transition duration-[200ms] hover:bg-red-500 group`}
    >
      <Icon
        icon="ph:x"
        className={`text-red-500 text-3xl group-hover:text-primary-content`}
      />
    </button>
  );
}

export function LikeButton() {
  return (
    <button className="invisible md:visible btn btn-circle bg-primary-content transition duration-[200ms] hover:bg-green-500 group">
      <Icon
        icon="prime:heart-fill"
        className={`text-green-500 text-3xl group-hover:text-primary-content`}
      />
    </button>
  );
}

export function PlayButton() {
  return (
    <button className="btn btn-lg bg-primary-content btn-circle transition duration-[200ms] hover:invert">
      <Icon icon={"ph:play-fill"} className="text-4xl" />
    </button>
  );
}
