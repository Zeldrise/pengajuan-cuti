type jenis_cuti = {
  id: number;
  jenis_cuti: string;
};

type pegawai = {
  id: number;
  user_id: number,
  nama: string,
  jatah_cuti: number,
  posisi: string,
  departement: string,
  tanggal_bergabung: Date,
};

type pengajuan_cuti = {
  id: number;
  pegawai_id: number,
  jenis_cuti_id: number,
  tanggal_pengajuan: Date,
  tanggal_mulai_cuti: Date,
  tanggal_akhir_cuti: Date,
  telepon_darurat: string,
  deskripsi: string,
  status_pengajuan_cuti: string,
};

type user = {
  id: number;
  email: string,
  password: string,
};
