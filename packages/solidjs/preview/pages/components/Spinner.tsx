import { DuckSpinner, Spacer } from "../../../src";

export const Spinner = () => <section>
	<h2>Spinner</h2><br />

	<Spacer>
		<DuckSpinner />
		<DuckSpinner size="32" />
		<DuckSpinner size="64" thin />
	</Spacer>
</section>
