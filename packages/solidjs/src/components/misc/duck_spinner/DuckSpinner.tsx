import { createMemo } from 'solid-js'
import type { DuckSpinnerComponent } from '.'
import '@vuuui/styles/components/misc/spinner/duck_spinner.scss'

export const DuckSpinner: DuckSpinnerComponent = (props) => {
	const className = createMemo(() => {
		let className = 'vuuui-duck-spinner'
		if (props.thin) className += ' vuuui-thin'
		return className
	})

	return <svg
		class={className()}
		width={props.size || 24}
		height={props.size || 24}
		viewBox='0 0 33.866664 33.866664'
		version='1.1'
		id='svg1'
		xmlns='http://www.w3.org/2000/svg'>

		<defs id='defs1' />

		<g id='layer1' class='vuuui-spinner'>
			<g
				class='vuuui-circle-0'
				id='g22'>

				<path
				class='vuuui-line'
				d='m 2.6736248,14.203488 c 0,0 1.3951363,-7.2354312 7.3763862,-10.1229312'
				id='path16' />

				<path
				class='vuuui-line'
				d='m 12.71875,2.8875 c 0,0 4.60625,-1.71875 9.4875,0.4812498'
				id='path17' />

				<path
				class='vuuui-line'
				d='m 26.984672,6.2784102 c 0,0 4.335839,2.9861583 4.537202,11.2528398'
				id='path18' />

				<path
				class='vuuui-line'
				d='m 29.595148,24.26875 c 0,0 -1.718898,3.074016 -4.260773,4.657814'
				id='path19' />

				<path
				class='vuuui-line'
				d='m 2.3458408,16.147909 c 0,0 -0.2229316,2.290195 0.5701363,5.027807'
				id='path20' />

				<path
				class='vuuui-line'
				d='m 4.05625,23.85625 c 0,0 2.8513975,4.80416 6.907648,6.316658'
				id='path21' />

				<path 
				class='vuuui-line'
				d='m 12.925,30.8 c 0,0 2.709727,1.613897 8.897227,-0.0361'
				id='path22' />
			</g>

			<g
				class='vuuui-circle-1'
				id='g33'>

				<path
				class='vuuui-line'
				d='m 8.1124998,6.9093749 c 0,0 3.4031252,-3.575 9.1093752,-3.334375'
				id='path23' />

				<path
				class='vuuui-line'
				d='m 19.353125,3.7812501 c 0,0 2.6125,0.4468749 4.090625,1.44375'
				id='path24' />
				
				<path 
				class='vuuui-line'
				d='m 24.921875,6.2562498 c 0,0 2.578125,1.684375 3.85,4.3656252'
				id='path25' />

				<path 
				class='vuuui-line'
				d='m 29.35625,11.928125 0.412498,1.203125'
				id='path26' />

				<path 
				class='vuuui-line'
				d='m 30.018892,14.511157 c 0,0 0.947965,3.913394 -0.802124,7.632334'
				id='path27' />

				<path 
				class='vuuui-line'
				d='m 28.050043,24.160955 c 0,0 -0.872306,2.180701 -3.740298,3.943598'
				id='path28' />

				<path 
				class='vuuui-line'
				d='m 22.046263,29.19246 c 0,0 -1.89593,0.753513 -3.135576,0.923658'
				id='path29' />

				<path 
				class='vuuui-line'
				d='m 15.483429,30.140425 c 0,0 -5.298882,-0.486134 -7.996936,-3.743245'
				id='path30' />

				<path 
				class='vuuui-line'
				d='m 6.0843749,24.6125 c 0,0 -2.475,-3.09375 -2.475,-6.634375'
				id='path31' />

				<path
				class='vuuui-line'
				d='M 3.678125,15.5375 C 3.713349,14.304345 3.8090817,13.658535 4.4343751,12.03125'
				id='path32' />

				<path
				class='vuuui-line'
				d='m 5.2593749,10.45 c 0,0 1.1,-1.7187501 1.4437501,-2.0625002'
				id='path33' />
			</g>
		</g>

		<g
			id='layer2'
			class='vuuui-duck'
			transform='translate(0.275,0.1375)'>

			<path
			class='vuuui-line vuuui-body'
			d='m 9.95702,9.979603 c -0.7389196,0.208826 -1.0762528,0.578285 -1.0441258,0.931682 0.032127,0.353397 0.128508,0.78711 1.1405078,0.803174 1.011998,0.01607 3.421521,0.08033 3.421521,0.08033 0,0 0.09639,0.337333 -0.01607,0.46584 -0.112449,0.128509 -3.5500282,2.232824 -3.325139,5.477647 0.224887,3.244824 1.879426,4.465647 1.879426,4.465647 0,0 0.04819,3.276951 0.06425,3.630348 0.01606,0.353396 0.144572,1.060189 0.658603,1.413586 0.514032,0.353399 1.65454,0.754982 2.955682,-0.04819 1.301141,-0.803175 2.666536,-1.943682 3.132379,-3.084189 0.46584,-1.140508 0.594348,-2.12038 0.594348,-2.409522 0,-0.289142 0.04819,-0.497969 0.658602,-0.497969 0.610412,0 3.935553,0.01607 4.128316,0.01607 0.192761,0 1.493903,-0.06425 1.831237,-0.867427 0.337332,-0.803173 0.41765,-1.89549 -0.497968,-3.100252 C 24.622977,16.051607 23.3379,14.766528 21.95644,14.493449 20.57498,14.220368 19.884252,14.284623 19.675426,14.043671 19.4666,13.802719 18.72768,12.983481 19.225647,12.035735 19.723615,11.087991 20.462536,9.4334513 19.900316,8.2286905 19.338094,7.0239223 18.599174,5.9316054 17.42654,5.6263993 16.253905,5.3211932 15.177652,5.2569394 14.406605,5.5942725 13.635557,5.9316054 12.880574,6.4135099 12.382606,7.3291285 11.884638,8.244747 11.884638,8.9354766 11.322418,9.3210006 10.760195,9.7065237 9.95702,9.9796019 9.95702,9.979603 Z'
			id='path34' />

			<circle
				class='vuuui-line vuuui-eye'
				// style='opacity:1fill:nonefill-opacity:1stroke:#000000stroke-width:0.529167stroke-linecap:roundstroke-linejoin:roundstroke-dasharray:nonestroke-opacity:1'
				id='path35'
				cx='15.920952'
				cy='8.3493843'
				r='1.069499'
			/>
		</g>
	</svg>
}