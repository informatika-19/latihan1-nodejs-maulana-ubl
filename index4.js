// array

const dataMahasiswa = [
    {
        nama : 'ZulkarnainHidayat',
        npm : '19421095',
        prodi : 'Informatika'
    },
    {
        nama : 'AzizGhoffar',
        npm : '19421062',
        prodi : 'Informatika'  
    }
]
    for (let i in dataMahasiswa){
        console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
    }