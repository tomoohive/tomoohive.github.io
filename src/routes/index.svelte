<svelte:head>
	<title>tomoohive Page</title>
</svelte:head>

<script>
  import Person from '../components/person.svelte'
  import Balloon from '../components/balloon.svelte'
  import Title from '../components/title.svelte'
  import Demand from '../components/demand.svelte'
</script>

<Title />
<Person />
<Balloon comment='Tomoyasu Futaba' top='-130px' left='90px'/>
<Balloon comment='12th Oct 1997' top='-80px' left='-100px'/>
<Balloon comment='Aim to Engineer' top='50px' left='90px'/>
<Balloon comment='using Svelte' top='70px' left='-90px'/>
<Demand />
