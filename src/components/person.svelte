<script>
    let image = 'person.PNG'
</script>

<style>
.person-image {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 300px;
    z-index: -999;
}
</style>

<img src={image} alt="personal image" class='person-image'/>