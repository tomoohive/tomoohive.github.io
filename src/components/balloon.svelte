<script>
  export let comment = "none"
  export let top = '0px'
  export let left = '0px'
</script>

<style>
.balloon2 {
  position: relative;
  display: inline-block;
  margin: 1.5em 0;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #000;
  font-size: 7px;
  font-family: 'Press Start 2P', cursive;
  background: #FFF;
  border: solid 1px #000;
  box-sizing: border-box;
}

.balloon2:before {
  content: "";
  position: absolute;
  bottom: -24px;
  left: 50%;
  margin-left: -15px;
  border: 12px solid transparent;
  border-top: 12px solid #FFF;
  z-index: 2;
}

.balloon2:after {
  content: "";
  position: absolute;
  bottom: -28px;
  left: 50%;
  margin-left: -17px;
  border: 14px solid transparent;
  border-top: 14px solid #000;
  z-index: 1;
}

.balloon2 {
    position: absolute;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: -998;
}
</style>

<div class="balloon2" 
     style="top: calc(50% + {top}); left: calc(50% + {left});">
  <div>{comment}</div>
</div>