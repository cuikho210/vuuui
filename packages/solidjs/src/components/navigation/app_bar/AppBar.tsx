import { createMemo } from "solid-js"
import { AppBarComponent } from ".."
import "@vuuui/styles/components/navigation/app_bar.scss"

export const AppBar: AppBarComponent = (props) => {
  const className = createMemo(() => {
		let c = 'vuuui-app-bar '
		if (props.class) c += props.class
		return c
	})

  return <section {...props} class={className()}>
    <div class="vuuui-app-bar-section-left">
      <div class="vuuui-app-bar-leading">
        {props.leading}
      </div>

      <div class="vuuui-app-bar-title">
        {props.title}
      </div>
    </div>

    <div class="vuuui-app-bar-actions">
      {props.actions}
    </div>
  </section>
}
