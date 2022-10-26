import { FunctionComponent } from "https://esm.sh/v96/preact@10.11.0/src/index.d.ts";

const Card: FunctionComponent<
  { img: string; color: string; photoRight?: boolean }
> = (
  { children, color, img, photoRight },
) => {
  const photo = <img src={img} class="w-1/2" />;

  const text = (
    <div
      class={`w-1/2 h-auto bg-[${color}] min-h-full content-center items-center flex`}
    >
      <div class="mx-auto text-center max-w-2xl">
        {children}
      </div>
    </div>
  );

  return (
    <div class="w-[1440px] flex mx-auto my-6">
      {
        photoRight ? <>{text}{photo}</> : <>{photo}{text}</>
      }
    </div>
  );
};

export default Card;
